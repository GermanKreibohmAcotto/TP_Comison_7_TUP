import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usuario: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario empiece a escribir
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validación básica
    if (!formData.usuario.trim() || !formData.password.trim()) {
      setError('Por favor, complete todos los campos');
      setIsLoading(false);
      return;
    }

    // Simulación de login (aquí irá la lógica real cuando Agustín agregue la contraseña)
    setTimeout(() => {
      // TODO: Aquí irá la validación real con los datos de usuarios
      // Por ahora simulamos un login exitoso
      
      // Credenciales de prueba (esto se reemplazará con la lógica real)
      if (formData.usuario === 'Niconeta97' && formData.password === '12345') {
        // Login exitoso
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('usuario', formData.usuario);
        
        // Si "Recordarme" está activado, guardar para próximas sesiones
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('savedUsuario', formData.usuario);
        }
        
        navigate(ROUTES.DASHBOARD);
      } else {
        setError('Usuario o contraseña incorrectos');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={6} lg={4}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-primary mb-2">Club Social-Deportivo</h2>
                <p className="text-muted">Iniciar Sesión</p>
              </div>

              {error && (
                <Alert variant="danger" dismissible onClose={() => setError('')}>
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsuario">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    name="usuario"
                    placeholder="Ingrese su usuario"
                    value={formData.usuario}
                    onChange={handleChange}
                    disabled={isLoading}
                    autoFocus
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Form.Check 
                    type="checkbox"
                    id="rememberMe"
                    label="Recordarme"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={isLoading}
                  />
                  <a 
                    href="#" 
                    className="text-decoration-none small"
                    onClick={(e) => {
                      e.preventDefault();
                      // TODO: Implementar recuperación de contraseña
                      alert('Funcionalidad de recuperación de contraseña próximamente');
                    }}
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <div className="d-grid gap-2">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Ingresando...' : 'Ingresar'}
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-4">
                <small className="text-muted">
                  Sistema de Gestión - Panel de Administración
                </small>
              </div>
            </Card.Body>
          </Card>

          {/* Credenciales de prueba (quitar en producción) */}
          <Card className="mt-3 border-info">
            <Card.Body className="py-2 text-center">
              <small className="text-muted">
                <strong>Prueba:</strong> Usuario: <code>Niconeta97</code> | Contraseña: <code>12345</code>
              </small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
