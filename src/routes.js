const express = require("express")
const yup = require("yup")
const connection = require("./db")

const router = express.Router()


router.get("/productos", function (request, response) {
  let {page = 1, perPage = 9} = request.query

  page= parseInt(page)
  perPage= parseInt(perPage)

  connection.query(
    "SELECT * FROM productos ORDER BY id DESC LIMIT ?, ?",
    [(page - 1) * perPage, perPage],
    function (error, result) {
      if (error) {
        console.log("Error fetching clients", error)
      } else {
        response.json(result)
      }
    },
  )
})

router.post("/producto", async function (request, response) {
  const schema = yup.object().shape({
    imagen_producto: yup.string().required("La imagen es obligatoria"),
    nombre: yup.string().required("El nombre es obligatorio"),
    descripcion: yup.string().required("La descripción es obligatoria"),
    precio: yup
      .number("El precio es inválido")
      .required("El precio es obligatorio"),
  })

  const datos = request.body

  try {
    const result = await schema.validate(datos)
    const query =
      "INSERT INTO productos (imagen_producto, nombre, descripcion, precio) VALUES (?,?,?,?)"

    connection.execute(query, Object.values(datos), function (error, result) {
      if (error) {
        response.status(400).json({
          message: "Error al guardar el producto",
          error: error,
        })
      } else {
        response.json({
          message: "Producto guardado",
          data: result,
        })
      }
    })
  } catch (error) {
    response.status(400).json({
      message: error.message,
    })
  }
})

router.get("/productos/:id", function (request, respose) {
  const { id } = request.params
  const query = "SELECT * FROM productos WHERE id = ?"

  connection.query(query, [id], function (error, result) {
    if (error) {
      respose.status(404).json({
        message: "Error al obtener el producto",
        error: error,
      })
    } else {
      if (result.length > 0) {
        respose.json(result[0])
      } else {
        respose.status(404).json({
          message: "Producto no encontrado",
        })
      }
    }
  })
})

router.put("/producto/:id", function (request, response) {
  const { id } = request.params
  const data = request.body

  try {
    //const query = "UPDATE productos SET ? WHERE id = ?"
    const query =
      "UPDATE productos SET imagen_producto = ?, nombre = ?, descripcion = ?, precio = ? WHERE id = ?"
  
    connection.execute(
      query,
      Object.values(data).concat(id),
      function (error, result) {
        if (error) {
          response.status(400).json({
            message: "Error al actualizar el producto",
            error,
          })
        } else {
          response.json({
            message: "Producto actualizado correctamente",
            data: result,
          })
        }
      },
    )
  } catch (error) {
    response.status(400).json({
      message: error.message,
    })
  }
})

router.delete("/producto/:id", function (request, response){
  const {id} = request.params
  const query = "DELETE FROM productos WHERE id= ?"
  connection.execute(query, [id], function(error, result){
    if (error) {
      response.status(400).json({
        message: "Error al eliminar el producto",
      })
    }else{
      response.json({
        message: "Producto eliminado correctamente",
        data: result
      })
    }
  })
})

//desde 200 hasta 299 - Ok
//desde 300 hasta 399 - Redirecciones
//desde 400 hasta 499 - Errores del cliente
//desde 500 hasta 599 - Errores del servidor

module.exports = router
