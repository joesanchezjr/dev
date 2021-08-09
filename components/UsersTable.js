const UsersTable = ({ users, isSubmitting }) => {
  if (isSubmitting && users.length < 1) return <p>Submitting query...</p>
  if (!isSubmitting && users.length < 1) return <p>No results.</p>
  return (
    <div className="relative">
      {isSubmitting && <p className="absolute bottom-full right-0">Updating query...</p>}
      <div className="max-h-64 overflow-y-scroll relative">
        <table className="relative w-full">
          <thead>
            <tr>
              <th className="sticky top-0 bg-gray-100">#</th>
              <th className="sticky top-0 bg-gray-100">Avatar</th>
              <th className="sticky top-0 bg-gray-100">Username</th>
              <th className="sticky top-0 bg-gray-100">User Type</th>
              <th className="sticky top-0 bg-gray-100">Score</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users?.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={user.avatar_url}
                    width="30"
                    height="30"
                    className="rounded-full mx-auto"
                  />
                </td>
                <td>
                  <p>{user.login}</p>
                </td>
                <td>
                  <p>{user.type}</p>
                </td>
                <td>
                  <p>{user.score}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersTable
