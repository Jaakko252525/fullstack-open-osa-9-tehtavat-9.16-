









const Alert = ({errorProp}: {errorProp: string}) => {

    if (errorProp === 'weather') {
        return (
            <div>
                Error: Weather was incorrect!
           </div>
        )
    }
    else if (errorProp === 'visibility') {

        return (
            <div>
                Error: Visibility was incorrect!
            </div>
        )
    }

    else
    return (
        <div>
            
        </div>
    )

}




export default Alert



















