const cleanTime = (timeInMs: number) => {
    let centiseconds = ('0' + (Math.floor(timeInMs / 10) % 100)).slice(-2);
    let seconds = ('0' + (Math.floor(timeInMs / 1000) % 60)).slice(-2);
    let minutes = ('0' + (Math.floor(timeInMs / 60000) % 60)).slice(-2);
    let hours = ('0' + Math.floor(timeInMs / 3600000)).slice(-2);

    return  (
        <>
        {hours} : {minutes} : {seconds} .  <span style={{opacity: 0}}>00</span> <span className="centi"> {centiseconds}</span>
        </>
    ) ;

}

export default cleanTime;