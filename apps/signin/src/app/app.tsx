// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import styles from './app.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <h1>Log In</h1>
      <form className={styles['login-form']}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>
        Don't have an account?<a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}
