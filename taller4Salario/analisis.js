const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColOdenados = salariosCol.sort((a,b) => a - b);
