interface User {
    uid: string
    displayName: string | null
    email: string | null
    photoURL?: string | null
}

export default User