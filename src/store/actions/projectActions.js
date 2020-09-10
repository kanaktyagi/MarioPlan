export const createProject = (project) => {
    return(dispatch,getState, {getFirebase, getFirestore}) => {

        const firestore = getFirebase().firestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createAt: new Date()
        }).then(() => {
            dispatch({ type:'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERR', err});
        })
    }
}