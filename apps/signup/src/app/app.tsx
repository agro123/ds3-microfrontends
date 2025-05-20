// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import styles from './app.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
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
          <label htmlFor="role">Select your role</label>
          <select id="role" name="role" required>
            <option value="">Select a role</option>
            <option value="frontend-developer">Frontend Developer</option>
            <option value="backend-developer">Backend Developer</option>
            <option value="fullstack-developer">Fullstack Developer</option>
            <option value="devops-engineer">DevOps Engineer</option>
            <option value="quality-assurance-engineer">
              Quality Assurance Engineer
            </option>
            <option value="ui-ux-designer">
              UI/UX Designer
            </option>
            <option value="project-manager">Project Manager</option>
            <option value="data-engineer">Data Engineer</option>
            <option value="machine-learning-engineer">
              Machine Learning
            </option>
          </select>
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
        <div>
          <label htmlFor="confirm password">Confirm Password</label>
          <input
            type="password"
            id="confirm password"
            name="confirm password"
            placeholder="Confirm password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?
        <a href="/signin">Log In</a>
      </p>
    </div>
  );
}
