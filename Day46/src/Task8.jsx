import { useEffect, useState } from "react";

function Task8() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (search === "") {
      setUsers([]);
      return;
    }

    const fetchUsers = async () => {
      const res = await fetch(
        `https://api.github.com/search/users?q=${search}`
      );
      const data = await res.json();
      setUsers(data.items || []);
    };

    fetchUsers();
  }, [search]); // 🔥 runs whenever search changes

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} width="30" alt="" />
            {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task8;
