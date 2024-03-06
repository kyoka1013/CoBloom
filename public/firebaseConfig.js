// public/firebaseConfig.js

let firebaseConfig = {}; // Firebaseの設定情報を格納する空のオブジェクト

// Firebaseの設定情報を動的に取得し、firebaseConfig変数に代入する
// この関数はサーバー側で実行されることを想定しており、クライアント側では実行されません
function setFirebaseConfig(apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId) {
    firebaseConfig = {
        apiKey: apiKey,
        authDomain: authDomain,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagingSenderId,
        appId: appId
    };
}

// 定義した関数をエクスポートする
module.exports = {
    firebaseConfig,
    setFirebaseConfig
};
