const Crypto = {
    secretKey: "mzsg-studio-2024",  // 加密密钥（可自定义，建议保持不变）
    
    // 加密函数
    encrypt: (text) => {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(
                text.charCodeAt(i) + this.secretKey.charCodeAt(i % this.secretKey.length)
            );
        }
        return btoa(result); // 转换为Base64
    },
    
    // 解密函数
    decrypt: (text) => {
        let result = "";
        const decoded = atob(text);
        for (let i = 0; i < decoded.length; i++) {
            result += String.fromCharCode(
                decoded.charCodeAt(i) - this.secretKey.charCodeAt(i % this.secretKey.length)
            );
        }
        return result;
    }
};