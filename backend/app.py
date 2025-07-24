from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import mysql.connector
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "static/images"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# DB 연결 설정
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1234",
    database="ist_lab_ver2"
)
cursor = conn.cursor()


# ────────────────────────────────
# 공통: 이미지 서빙
# ────────────────────────────────
@app.route('/static/images/<filename>')
def serve_image(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename)


# ────────────────────────────────
# 1. 논문 관련 API
# ────────────────────────────────

@app.route("/api/publications", methods=["POST"])
def add_publication():
    try:
        category = request.form["category"]
        title = request.form["title"]
        authors = request.form["authors"]
        venue = request.form["venue"]
        year = request.form["year"]
        doi = request.form.get("doi", "")
        paper_url = request.form["paperUrl"]
        volume = request.form.get("volume", "")
        pages = request.form.get("pages", "")
        location = request.form.get("location", "")
        date = request.form.get("date", "")

        # 이미지 처리
        image = request.files.get("image")
        image_path = ""
        if image:
            filename = secure_filename(image.filename)
            save_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
            image.save(save_path)
            image_path = f"/static/images/{filename}"

        cursor.execute("""
            INSERT INTO publications (category, title, authors, venue, volume, pages, year, doi, paper_url, image_path, location, date)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            category, title, authors, venue, volume, pages, year, doi, paper_url, image_path, location, date
        ))
        conn.commit()
        return jsonify({"message": "등록 성공!"}), 201
    except Exception as e:
        print("등록 실패:", e)
        return jsonify({"error": "등록 실패"}), 500

@app.route("/api/publications", methods=["GET"])
def get_publications():
    try:
        cursor.execute("SELECT * FROM publications ORDER BY id DESC")
        rows = cursor.fetchall()
        columns = [desc[0] for desc in cursor.description]
        results = [dict(zip(columns, row)) for row in rows]
        return jsonify(results)
    except Exception as e:
        print("불러오기 실패:", e)
        return jsonify({"error": "불러오기 실패"}), 500

@app.route("/api/publications/<int:pub_id>", methods=["DELETE"])
def delete_publication(pub_id):
    try:
        cursor.execute("SELECT image_path FROM publications WHERE id = %s", (pub_id,))
        result = cursor.fetchone()
        if result and result[0]:
            image_path = result[0].lstrip("/")
            if os.path.exists(image_path):
                os.remove(image_path)

        cursor.execute("DELETE FROM publications WHERE id = %s", (pub_id,))
        conn.commit()
        return jsonify({"message": "삭제 완료"}), 200
    except Exception as e:
        print("삭제 실패:", e)
        return jsonify({"error": "삭제 실패"}), 500


# ────────────────────────────────
# 2. 뉴스 관련 API
# ────────────────────────────────

@app.route("/api/news", methods=["POST"])
def create_news():
    try:
        title = request.form["title"]
        summary = request.form["summary"]
        content = request.form.get("content", "")
        date = request.form["date"]
        author = request.form["author"]
        category = request.form["category"]
        featured = request.form.get("featured", "false").lower() == "true"

        image = request.files.get("image")
        image_path = ""
        if image:
            filename = secure_filename(image.filename)
            save_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
            image.save(save_path)
            image_path = f"/static/images/{filename}"

        cursor.execute("""
            INSERT INTO news (title, summary, content, date, author, category, featured, image_path)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            title, summary, content, date, author, category, featured, image_path
        ))
        conn.commit()
        return jsonify({"message": "뉴스 등록 성공"}), 201
    except Exception as e:
        print("뉴스 등록 실패:", e)
        return jsonify({"error": "뉴스 등록 실패"}), 500

@app.route("/api/news", methods=["GET"])
def get_news_list():
    try:
        cursor.execute("SELECT * FROM news ORDER BY date DESC")
        rows = cursor.fetchall()
        columns = [desc[0] for desc in cursor.description]
        return jsonify([dict(zip(columns, row)) for row in rows])
    except Exception as e:
        print("뉴스 목록 조회 실패:", e)
        return jsonify({"error": "뉴스 조회 실패"}), 500

@app.route("/api/news/<int:news_id>", methods=["DELETE"])
def delete_news(news_id):
    try:
        cursor.execute("SELECT image_path FROM news WHERE id = %s", (news_id,))
        result = cursor.fetchone()
        if result and result[0]:
            image_path = result[0].lstrip("/")
            if os.path.exists(image_path):
                os.remove(image_path)

        cursor.execute("DELETE FROM news WHERE id = %s", (news_id,))
        conn.commit()
        return jsonify({"message": "뉴스 삭제 완료"}), 200
    except Exception as e:
        print("뉴스 삭제 실패:", e)
        return jsonify({"error": "뉴스 삭제 실패"}), 500



if __name__ == "__main__":
    app.run(debug=True, port=3001)
