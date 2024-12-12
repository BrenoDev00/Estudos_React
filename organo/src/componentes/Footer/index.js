import "./Footer.css";

const Footer = () => {
  return (
    <footer style={{ backgroundImage: "url(../imagens/fundo.png)" }}>
      <div className="social-media">
        <img src="../imagens/fb.png" alt="Logo do Facebook." />
        <img src="../imagens/tw.png" alt="Logo do Twitter." />
        <img src="../imagens/ig.png" alt="Logo do Instagram." />
      </div>

      <img
        className="logo"
        src="../imagens/logo.png"
        alt="Logo do projeto Organo."
      />

      <p>Desenvolvido por Breno.</p>
    </footer>
  );
};

export default Footer;