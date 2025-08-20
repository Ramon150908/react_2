import styles from './Header.module.css'
function Header(){
    return(
        <div className={styles.container}>
            <p className={styles.paragrafo}>Perfil do Usuário</p>
        </div>
    )
}
export default Header