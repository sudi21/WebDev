const Button = ({children , color}) => {
    return ( 
        <div>
            <button style={{
            alignSelf: 'center',
            height: 50,
            borderRadius: 10,
            backgroundColor: color,
            cursor: "pointer",
            width: 150,
            outline: 'none',
            border: "1px solid #eeeeee"
        }}>
            <p style={{
                fontSize: 20,
                color: "white" 
            }}>{children}</p>
        </button>
        </div>
     );
}
 
export default Button;