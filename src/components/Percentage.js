function Percentage({coin}) {

    function percentageColor() {
        if(coin <= 0){
            return "falling"
        } else {
            return "rising"
        }
    }
    return (
        <td className={percentageColor()}>{coin.toFixed(1)}%</td>
    )
    
}

export default Percentage