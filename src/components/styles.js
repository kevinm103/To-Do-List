const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #153677, #4e085f)",
      padding: "10px"
    },
    todoApp: {
      width: "100%",
      maxWidth: "540px",
      background: "#fff",
      margin: "100px auto 20px",
      padding: "40px 30px 70px",
      borderRadius: "10px"
    },
    todoAppH2: {
      color: "#002765",
      display: "flex",
      alignItems: "center",
      marginBottom: "20px"
    },
    todoAppImg: {
      width: "30px",
      marginLeft: "10px"
    },
    row: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#edeef0",
      borderRadius: "30px",
      paddingLeft: "20px",
      marginBottom: "25px"
    },
    input: {
      flex: "1",
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "10px"
    },
    button: {
      border: "none",
      outline: "none",
      padding: "16px 50px",
      background: "#ff5945",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "40px"
    },
    ulLi: {
      listStyle: "none",
      fontSize: "17px",
      padding: "12px 8px 12px 50px",
      userSelect: "none",
      cursor: "pointer",
      position: "relative"
    },
    ulLiBefore: {
      content: "''",
      position: "absolute",
      height: "28px",
      width: "28px",
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      top: "12px",
      left: "8px"
    },
    ulLiChecked: {
      color: "#555",
      textDecoration: "line-through !important"
    },
    ulLiCheckedBefore: {
      
    },
    ulLiSpan: {
      position: "absolute",
      right: "0",
      top: "5px",
      width: "40px",
      height: "40px",
      fontSize: "22px",
      color: "#555",
      lineHeight: "40px",
      textAlign: "center",
      borderRadius: "50%"
    }
  };
  
  export default styles;
  