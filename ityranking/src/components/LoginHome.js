import '../assets/css/LoginHome.css'


function LoginHome (props) {
    return (
        <>
            <section className="area-login">
                <div className="login">
                    <div>
                        <h2 id="h2">ENTRAR</h2>
                    </div>

                    <form className="form" action="">
                        <label className="label" for="name">login:</label>
                        <input className="input" type="text" name="nome" autofocus />
                        <label className="label" for="senha">senha:</label>
                        <input className="input" type="password" name="senha" />
                        <button id="button">entrar</button>
                    </form>
                </div>
            </section>
            </>
    );
}

export default LoginHome;