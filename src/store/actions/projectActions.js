export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db
    getFirestore().collection('projects').add({
      ...project,
      authorFirstName: 'Khazzar',
      authoreLastName: 'Dev',
      authorId: 12345,
      createdAt: new Date()
    })
      .then(() => {
        dispatch({
          type: 'CREATE_PROJECT',
          project
        })
      })
      .catch((error) => {
        dispatch({
          type: 'CREATE_PROJECT_ERROR',
          error
        })
      })
  }
}
