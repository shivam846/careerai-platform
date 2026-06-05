# # # from flask import Flask, request, jsonify
# # # import joblib

# # # app = Flask(__name__)

# # # # 🔥 Load model
# # # model = joblib.load("rf_model.pkl")
# # # encoder = joblib.load("label_encoder.pkl")

# # # @app.route("/predict", methods=["POST"])
# # # def predict():
# # #     data = request.json

# # #     features = [[
# # #         data["Coding"],
# # #         data["Algorithms"],
# # #         data["Data Structures"],
# # #         data["Machine Learning"],
# # #         data["Statistics"],
# # #         data["Cloud Computing"],
# # #         data["Cyber Security"],
# # #         data["Networking"],
# # #         data["Databases"],
# # #         data["Biology"],
# # #         data["Human Anatomy"],
# # #         data["Patient Care"],
# # #         data["Pharmacology"],
# # #         data["Medical Research"],
# # #         data["Current Affairs"],
# # #         data["Indian Polity"],
# # #         data["Law"],
# # #         data["Public Administration"],
# # #         data["Economics"],
# # #         data["Geography"],
# # #         data["History"],
# # #         data["Physics"],
# # #         data["Mathematics"],
# # #         data["Electronics"],
# # #         data["Mechanical Systems"],
# # #         data["Civil Structures"],
# # #         data["Accounting"],
# # #         data["Finance"],
# # #         data["Business Strategy"],
# # #         data["Marketing"],
# # #         data["Physical Fitness"],
# # #         data["Defense Studies"],
# # #         data["Discipline"],
# # #         data["Communication Skills"],
# # #         data["Leadership"],
# # #         data["Problem Solving"]
# # #     ]]

# # #     prediction = model.predict(features)
# # #     career = encoder.inverse_transform(prediction)[0]

# # #     return jsonify({"career": career})


# # # if __name__ == "__main__":
# # #     app.run(port=5000)


# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # import joblib
# # import numpy as np

# # app = Flask(__name__)

# # # 🔥 Enable CORS (React / Spring Boot ke liye)
# # CORS(app)

# # # 🔥 Load ML Model & Encoder
# # try:
# #     model = joblib.load("ml/rf_model.pkl")
# #     label_encoder = joblib.load("ml/label_encoder.pkl")
# #     print("✅ Model loaded successfully")
# # except Exception as e:
# #     print("❌ Model loading failed:", e)

# # # ✅ Health Check Route (IMPORTANT)
# # @app.route("/", methods=["GET"])
# # def home():
# #     return jsonify({
# #         "message": "ML Career API Running 🚀"
# #     })

# # # ✅ Prediction Route
# # @app.route("/predict", methods=["POST"])
# # def predict():
# #     try:
# #         data = request.get_json()

# #         # ❌ Validation
# #         if not data:
# #             return jsonify({"error": "No input data provided"}), 400

# #         # 🔥 Convert input to array
# #         features = np.array(list(data.values())).reshape(1, -1)

# #         # 🔥 Prediction
# #         # OLD
# #         #prediction = model.predict([input_data])[0]

# #         # NEW
# #         data = request.json
# #         input_data = list(data.values())
# #         probs = model.predict_proba([input_data])[0]

# #         top3_idx = probs.argsort()[-3:][::-1]

# #         top3 = []
# #         for i in top3_idx:
# #             top3.append({
# #                 "career": label_encoder.inverse_transform([i])[0],
# #                 "score": float(probs[i])
# #             })

# #         return jsonify({"top_3_careers": top3})

# #     except Exception as e:
# #         print("❌ Error:", e)
# #         return jsonify({
# #             "error": str(e)
# #         }), 500


# # # ✅ Run Server
# # if __name__ == "__main__":
# #     app.run(debug=True)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import joblib
# import numpy as np
# import mysql.connector

# app = Flask(__name__)
# CORS(app)

# # ✅ MySQL Connection
# db = mysql.connector.connect(
#     host="localhost",
#     user="careerai",
#     password="Career@123",
#     database="careerdb"
# )
# cursor = db.cursor()

# # ✅ Load Model
# try:
#     model = joblib.load("ml/rf_model.pkl")
#     label_encoder = joblib.load("ml/label_encoder.pkl")
#     print("✅ Model loaded successfully")
# except Exception as e:
#     print("❌ Model loading failed:", e)


# # ✅ Health Check
# @app.route("/", methods=["GET"])
# def home():
#     return jsonify({
#         "message": "ML Career API Running 🚀"
#     })


# # ✅ Prediction API
# @app.route("/predict", methods=["POST"])
# def predict():
#     try:
#         data = request.get_json()

#         # ❌ अगर data empty है
#         if not data:
#             return jsonify({"error": "No input data provided"}), 400

#         # ✅ Convert input → list → numpy
#         input_data = list(data.values())
#         input_array = np.array(input_data).reshape(1, -1)

#         # ✅ Predict probabilities
#         probs = model.predict_proba(input_array)[0]

#         # ✅ Top 3 निकालो
#         top3_idx = probs.argsort()[-3:][::-1]

#         top3 = []
#         for i in top3_idx:
#             top3.append({
#                 "career": label_encoder.inverse_transform([i])[0],
#                 "score": float(probs[i])
#             })

#         return jsonify({
#             "top_3_careers": top3
#         })

#     except Exception as e:
#         print("❌ Error:", e)
#         return jsonify({
#             "error": str(e)
#         }), 500


# # ✅ History API
# @app.route("/history/<email>", methods=["GET"])
# def get_history(email):
#     try:
#         cursor.execute(
#             "SELECT top_career, created_at FROM user_results WHERE user_email=%s ORDER BY created_at DESC",
#             (email,)
#         )
#         results = cursor.fetchall()

#         history = []
#         for r in results:
#             history.append({
#                 "career": r[0],
#                 "date": str(r[1])
#             })

#         return jsonify(history)

#     except Exception as e:
#         print("❌ History Error:", e)
#         return jsonify({"error": str(e)}), 500

# # ✅ Run Server
# if __name__ == "__main__":
#     app.run(debug=True)



from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import mysql.connector

app = Flask(__name__)
CORS(app)

# ==========================
# ✅ MySQL CONNECTION
# ==========================
try:
    db = mysql.connector.connect(
        host="localhost",
        user="careerai",
        password="Career@123",
        database="careerdb"
    )
    cursor = db.cursor()
    print("✅ MySQL Connected")
except Exception as e:
    print("❌ MySQL Connection Error:", e)


# ==========================
# ✅ LOAD ML MODEL
# ==========================
try:
    model = joblib.load("ml/rf_model.pkl")
    label_encoder = joblib.load("ml/label_encoder.pkl")
    print("✅ Model loaded successfully")
except Exception as e:
    print("❌ Model loading failed:", e)


# ==========================
# ✅ HEALTH CHECK
# ==========================
@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "ML Career API Running 🚀"
    })


# ==========================
# ✅ PREDICT + SAVE
# ==========================
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        print("📩 Incoming Data:", data)

        if not data:
            return jsonify({"error": "No input data provided"}), 400

        # 🔥 EMAIL (frontend se aayega)
        user_email = data.get("email", "guest")

        # 🔥 FEATURES (email hata ke)
        features = [v for k, v in data.items() if k != "email"]

        input_array = np.array(features).reshape(1, -1)

        # ==========================
        # ✅ ML PREDICTION
        # ==========================
        probs = model.predict_proba(input_array)[0]

        top3_idx = probs.argsort()[-3:][::-1]

        top3 = []
        for i in top3_idx:
            top3.append({
                "career": label_encoder.inverse_transform([i])[0],
                "score": float(probs[i])
            })

        print("📊 Top 3:", top3)

        # ==========================
        # ✅ SAVE TO MYSQL
        # ==========================
        try:
            top_career = top3[0]["career"]

            print("💾 Saving to DB:", user_email, top_career)

            cursor.execute(
                "INSERT INTO user_results (user_email, top_career, all_careers) VALUES (%s, %s, %s)",
                (user_email, top_career, str(top3))
            )

            db.commit()

            print("✅ Data saved successfully")

        except Exception as db_error:
            print("❌ DB ERROR:", db_error)

        return jsonify({
            "top_3_careers": top3
        })

    except Exception as e:
        print("❌ Prediction Error:", e)
        return jsonify({
            "error": str(e)
        }), 500


# ==========================
# ✅ HISTORY API
# ==========================
@app.route("/history/<email>", methods=["GET"])
def get_history(email):
    try:
        cursor.execute(
            "SELECT top_career, created_at FROM user_results WHERE user_email=%s ORDER BY created_at DESC",
            (email,)
        )

        results = cursor.fetchall()

        history = []
        for r in results:
            history.append({
                "career": r[0],
                "date": str(r[1])
            })

        print("📜 History:", history)

        return jsonify(history)

    except Exception as e:
        print("❌ History Error:", e)
        return jsonify({"error": str(e)}), 500


# ==========================
# ✅ RUN SERVER
# ==========================
if __name__ == "__main__":
    app.run(debug=True)