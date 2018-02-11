class MembersApi {
    static getAllMembers() {
        return new Promise((resolve, reject) => {
            fetch('/members')
            .then(response => {
                if(!response.ok){
                    throw new Error(`status ${response.status}`)
                }
                resolve(response.json());
            })
        })
    }

    static addNewMember(member) {
        return new Promise((resolve, reject) => {
            fetch('/members')
            .method()
            .then(response => {
                if(!response.ok){
                    throw new Error(`status ${response.status}`)
                }
                resolve(response.json());
            })
        })
    }
}

export default MembersApi;