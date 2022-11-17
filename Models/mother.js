const modeloPersonaje = {
    queryGetPersonaje: "SELECT * FROM earthbound",
 
    queryGetPersonajeByID : `SELECT * FROM earthbound WHERE ID= ?`,
 
    queryDeletePersonajeByID: `UPDATE earthbound SET Estado='Muerto' WHERE ID= ?`,
 
    queryPersonajeExists: `SELECT Nombre FROM earthbound WHERE Nombre = ?`,
 
    queryAddPersonaje: `
             INSERT INTO earthbound(
                 Nombre,
                 PV,
                 PP,
                 Curacion,
                 Asistencia,
                 Ataque,
                 Velocidad,
                 Agallas,
                 Defensa,
                 Estado
             )VALUES(
                 ?,
                 ?,
                 ?,
                 ?,
                 ?,
                 ?,
                 ?,
                 ?,
                 ?,
                 ?
             )`, 
    queryGetPersonajeInfo:`
    SELECT Nombre, PV, PP, Curacion, Asistencia,Ataque,Velocidad,Agallas,Defensa,Estado
    FROM earthbound
    WHERE Nombre =?
    `,
    queryUpdateByPersonaje:`
    UPDATE earthbound SET
        PV= ?,
        PP= ?,
        Curacion= ?,
        Asistencia= ?,
        Ataque=?,
        Velocidad=?,
        Agallas=?,
        Defensa=?,
        Estado=?
    WHERE Nombre= ?
  `
 }
 module.exports = modeloPersonaje