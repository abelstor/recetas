
export const Contact = () => {

  return (
    <div className="background__image">
      <section className="contact">
        <div className="contact__left">
          <div className="contact__left-form">
            <h4 style={{ marginLeft: "20px" }}
              className="contact__title">
              Form</h4>
            <form action="https://formspree.io/abelstorg@gmail.com"
              method="POST"
              className="contact__left-form">
              <div className="form-group">
                {/* <label for="name">Nombre</label> */}
                <input type="text" className="form-control" name="name" aria-describedby="name" placeholder="Nombre" />
              </div>
              <div className="form-group">
                {/* <label for="exampleInputEmail1">Email</label> */}
                <input type="email" name="_replyto" className="form-control" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="form-group">
                {/* <label for="comment">Commentario:</label> */}
                <textarea name="message" placeholder="Mensage" className="form-control" rows="4" id="comment"></textarea>
              </div>
              <div className="form-group">
                <label>
                  <button type="submit" value="Send" className="btn pointer">
                    Enviar
                  </button>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="contact__right">
          <div className="contact__right-info">
            <h4
              style={{ marginBottom: "10px" }}
              className="contact__title"
            >
              Contacto
            </h4>
            <p
              style={{ marginBottom: "30px", marginTop: "50px" }}>
              Si deseas más información, no dudes en comunicarte con nosotros.
            </p>
            <span
              style={{ marginBottom: "20px" }}
            >Teléfono</span>
            <p
              style={{ marginBottom: "20px" }}
            >+55 9 821 789 344</p>
            <span
              style={{ marginBottom: "20px" }}
            >Email</span>
            <p>fruta&fruto@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}
