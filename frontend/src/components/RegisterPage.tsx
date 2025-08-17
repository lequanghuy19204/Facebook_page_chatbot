"use client";

import React, { useState } from "react";
import "@/styles/RegisterPage.css";

export interface RegisterPageProps {
  onRegister?: (email: string, password: string, confirmPassword: string, fullName: string) => void;
  onBackToLogin?: () => void;
}

export default function RegisterPage(props: RegisterPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    if (props.onRegister) {
      props.onRegister(email, password, confirmPassword, fullName);
    }
  };

  return (
    <div className="register-container">
      <div className="register-left-panel">
        <div className="register-form-container">
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="register-logo"
          />
          <h1 className="register-title">Đăng ký Account</h1>
          <p className="register-subtitle">
            Tạo tài khoản mới để bắt đầu sử dụng ChatBot platform.
          </p>
          
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label className="form-label">Họ và tên</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Mật khẩu</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Xác nhận mật khẩu</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="form-input"
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="register-button">
                Đăng ký
              </button>
            </div>
          </form>

          <div className="login-section">
            <span className="login-text">Bạn đã có tài khoản?</span>
            <button 
              className="login-button"
              onClick={props.onBackToLogin}
            >
              Đăng nhập ngay
            </button>
          </div>
        </div>
      </div>

      <div className="register-right-panel">
        <div className="showcase-container">
          <img 
            src="/Showcase.svg" 
            alt="ChatBot Showcase" 
            className="showcase-image"
          />
          <h2 className="showcase-title">
            ChatBot - Multi-channel management and sales platform
          </h2>
          <p className="showcase-subtitle">
            Comprehensive sales management on social media and e-commerce platforms
          </p>
        </div>
      </div>
    </div>
  );
} 