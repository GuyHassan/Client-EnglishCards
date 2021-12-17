
const style = {
    notFound: { textAlign: 'center', margin: '35vh auto' }
}
export const RouteNotFound = () => {
    return (
        <div>
            <h1 style={style.notFound}> 404 NOT FOUND!</h1 >
        </div >
    )
}

export const historyPath = (path) => path === '/wordlearn' ? 0 : path === '/uploadwords' ? 1 : 2;