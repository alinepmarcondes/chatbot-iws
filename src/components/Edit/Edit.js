import React, { useState, useEffect } from 'react';
import './Edit.css';
import { useNavigate, useParams } from "react-router-dom";
import { validateInputs, validateInputsType } from '../utils/validation';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setLogin(data.login);
        } else {
          console.error('Erro ao buscar usuário:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleEdit = async () => {
    if (validateInputs(login, password, setErrorMessage) && validateInputsType(password, setErrorMessage)) {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ login, password })
        });
        if (response.ok) {
          navigate('/newuser');
        } else {
          console.error('Erro ao atualizar usuário:', response.statusText);
          setErrorMessage('Erro ao atualizar usuário.');
        }
      } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        setErrorMessage('Erro ao atualizar usuário.');
      }
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        navigate('/newuser');
      } else {
        console.error('Erro ao excluir usuário:', response.statusText);
        setErrorMessage('Erro ao excluir usuário.');
      }
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      setErrorMessage('Erro ao excluir usuário.');
    }
  };

  const handleBack = () => {
    navigate('/newuser'); 
  };

  const handleNewLoginChange = (e) => {
    setLogin(e.target.value);
    setErrorMessage('');
  };

  const handleNewPasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };

  return (
    <div className="edit-page">
      <div className="create-container">
        <h2 className="edit-title">Edit<br /></h2>
        <input 
          type="text" 
          placeholder="New Login" 
          className="edit-login-input" 
          data-testid="login-input"
          value={login}
          onChange={handleNewLoginChange}
        />
        <input 
          type="password" 
          placeholder="New Password" 
          className="edit-password-input" 
          data-testid="password-input"
          onChange={handleNewPasswordChange}
        />
        {errorMessage && <p data-testid="error-message" className="error-message">{errorMessage}</p>}
        <button className="edit-button" onClick={handleEdit}>Update</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
        <button className="back-edit-button" onClick={handleBack}>Back</button>
      </div>
    </div>
  );
}

export default Edit;
