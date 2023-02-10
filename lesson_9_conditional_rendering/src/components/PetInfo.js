function PetInfo({name, age, hasPet}) {
    return (hasPet
            ?   <h1>
                    {`My ${name} is ${age} years old`}
                </h1>

            :   <h2>
                    {'I don\'t have pet'}
                </h2>
    );
}

export default PetInfo