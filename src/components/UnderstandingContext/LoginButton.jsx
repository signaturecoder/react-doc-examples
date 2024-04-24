import React, {useContext} from 'react'
import Button from './Button'
import { CurrentUserContext } from '../../../App'

const LoginButton = ({loggedUser}) => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    if(currentUser !== null) {
        return <p>You logged in as {currentUser.firstName} {currentUser.lastName}</p>
    }

  return (
    <Button onBtnClick={() => setCurrentUser(loggedUser)}>Login</Button>
  )
}

export default LoginButton