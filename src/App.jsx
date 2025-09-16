import {Profile} from "./Components/Profile.jsx"

function App() {
const users = [
        { "id": 1, "name": "Leanne Graham", "role": "Software Engineer", "avatarUrl": "https://avatar.iran.liara.run/public/24e" },
        { "id": 2, "name": "Ervin Howell", "role": "Full-Stack Developer", "avatarUrl": "https://avatar.iran.liara.run/public/13" },
        { "id": 3, "name": "Clementine Bauch", "role": "Product Manager", "avatarUrl": "https://avatar.iran.liara.run/public/2" },
        { "id": 4, "name": "Patricia Lebsack", "role": "UX Designer", "avatarUrl": "https://avatar.iran.liara.run/public/38" },
        { "id": 5, "name": "Chelsey Dietrich", "role": "QA Engineer", "avatarUrl": "https://avatar.iran.liara.run/public/32" },
        { "id": 6, "name": "Mrs. Dennis Schulist", "role": "DevOps Engineer", "avatarUrl": "https://avatar.iran.liara.run/public/49"},
        { "id": 7, "name": "Kurtis Weissnat", "role": "Backend Developer", "avatarUrl": "https://avatar.iran.liara.run/public/43" }
    ];

  return (
    <div>
      <h1 className = "text-4xl md:text-5xl font-bold text-center text-blue-700 my-8">React Lab2 Slovikovskyi</h1>
<div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex-grow p-15">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <Profile
                            key={user.id}
                            name={user.name}
                            role={user.role}
                            avatarUrl={user.avatarUrl}
                        />
                    ))}
                </div>
            </main>
        </div>
        </div>

  )
}

export default App
