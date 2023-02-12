function Person({firstName, lastName, email, img }) {
    return (
        <div className="card">
            <p>{firstName} {lastName}</p>
            <p>{email}</p>
            <img src={img} alt="Logo" />
        </div>
    );
}

export default Person;