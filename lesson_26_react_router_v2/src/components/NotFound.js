function NotFound({text}) {
      if (text) {
            return (
                  <h1>{text}</h1>
            );
      } else {
            return (
                  <h1>Ошибка</h1>
            );
      }

}

export default NotFound;