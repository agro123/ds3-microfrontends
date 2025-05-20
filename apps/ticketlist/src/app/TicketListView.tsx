import { FaSignOutAlt, FaPlus, FaSearch } from 'react-icons/fa';
import styles from './app.module.css'; // Ajusta la ruta según dónde esté
import { IoFilter } from 'react-icons/io5';

export function TicketListView() {
  const tickets = [
    {
      id: '1',
      title: 'Title 1',
      assigned: 'Clark',
      status: 'To do',
      date: 'May 15, 2025',
    },
    {
      id: '2',
      title: 'Title 2',
      assigned: 'Lois',
      status: 'In progress',
      date: 'May 16, 2025',
    },
    {
      id: '3',
      title: 'Title 3',
      assigned: 'Bruce',
      status: 'Completed',
      date: 'May 10, 2025',
    },
    {
      id: '4',
      title: 'Title 4',
      assigned: 'Diana',
      status: 'To do',
      date: 'May 18, 2025',
    },
    {
      id: '5',
      title: 'Title 5',
      assigned: 'Barry',
      status: 'In progress',
      date: 'May 12, 2025',
    },
    {
      id: '6',
      title: 'Title 6',
      assigned: 'Arthur',
      status: 'Completed',
      date: 'May 14, 2025',
    },
    {
      id: '7',
      title: 'Title 7',
      assigned: 'Victor',
      status: 'To do',
      date: 'May 20, 2025',
    },
    {
      id: '8',
      title: 'Title 8',
      assigned: 'Selina',
      status: 'In progress',
      date: 'May 17, 2025',
    },
    {
      id: '9',
      title: 'Title 9',
      assigned: 'Hal',
      status: 'Completed',
      date: 'May 11, 2025',
    },
    {
      id: '10',
      title: 'Title 10',
      assigned: 'John',
      status: 'To do',
      date: 'May 19, 2025',
    },
  ];

  return (
    <>
      <div className={styles.main}>
        <div className={styles.nav_user}>
          <span>Welcome User name</span>
          <button>
            <FaSignOutAlt
              style={{ marginRight: '8px' }}
              className={styles.signOut_icon}
            />
            <span>Sign out</span>
          </button>
        </div>
        <div className={styles.nav_search}>
          <button>
            <FaPlus
              style={{ marginRight: '8px' }}
              className={styles.faPlus_icon}
            />
            <span>Create</span>
          </button>
          <section className={styles.search_wrapper}>
            <FaSearch className={styles.search_icon} />
            <input type="text" placeholder="Search by keyword" />
            <button>
              <IoFilter className={styles.filter_icon} />
            </button>
          </section>
        </div>

        <div className={styles.tickets_list}>
          <section className={styles.cell_list}>
            <span>ID</span>
            <span>Title</span>
            <span>Assigned to</span>
            <span>Status</span>
            <span>Date</span>
          </section>
          {tickets.map((e) => (
            <section className={styles.cell_list}>
              <span className={styles.normal}>{e.id}</span>
              <span className={styles.normal}>{e.title}</span>
              <span className={styles.normal}>
                <img alt="" className={styles.userpic} />
                {e.assigned}
              </span>
              <span className={styles.normal}>
                <span
                  className={`${styles.ticket_color} ${
                    e.status === 'Completed'
                      ? styles.completed
                      : e.status === 'In progress'
                      ? styles.inProgress
                      : styles.toDo
                  }`}
                ></span>
                <span className={styles.normal}>{e.status}</span>
              </span>
              <span className={styles.normal}>{e.date}</span>
            </section>
          ))}
        </div>
        <div className={styles.tickets_list_mobile}>
          {tickets.map((e) => (
            <section key={e.id} className={styles.ticket_card}>
              <p>
                <strong>ID:</strong>
                {e.id}
              </p>
              <p>
                <strong>Title:</strong>
                {e.title}
              </p>
              <p>
                <strong>Assigned:</strong>
                {e.assigned}
              </p>
              <p>
                <strong>Status:</strong>
                {e.status}
              </p>
              <p>
                <strong>Date:</strong>
                {e.date}
              </p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default TicketListView;
