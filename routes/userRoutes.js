const express = require('express')
const router = express.Router()

const { createUser, getUser, updateUser, getUserById, deleteUser } = require('../controllers/userController')
const { imageUploads } = require('../middleware/users/imageUploads')
const { addUserValidators, addUserValidationHandler } = require('../middleware/users/userValidation')
const { userAuthentication } = require('../middleware/users/userAuthentication')

/**
 * @swagger
 * /users: 
 *   get:
 *     summary: Get all users.
 *     description: Retrieve a list of all users.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of users retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   username:
 *                     type: string
 *                   image:
 *                     type: string
 *                 example:
 *                   - id: 1
 *                     name: John Doe
 *                     username: johndoe
 *                     image: https://example.com/images/johndoe.jpg
 *                   - id: 2
 *                     name: Jane Smith
 *                     username: janesmith
 *                     image: https://example.com/images/janesmith.jpg
 *       400:
 *         description: Bad request. Invalid input data.
 *       500:
 *         description: Internal server error.
 *     security:
 *       - bearerAuth: []

 *   post:
 *     summary: Create a new user.
 *     description: Create a new user.
 *     produces:
 *       - application/json
 *     requestBody:
 *       description: User data to create.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               username:
 *                 type: string
 *               image:
 *                 type: string
 *             example:
 *               name: New User
 *               username: newuser
 *               image: https://example.com/images/newuser.jpg
 *     responses:
 *       201:
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 username:
 *                   type: string
 *                 image:
 *                   type: string
 *               example:
 *                 id: 3
 *                 name: New User
 *                 username: newuser
 *                 image: https://example.com/images/newuser.jpg
 *       400:
 *         description: Bad request. Invalid input data.
 *       500:
 *         description: Internal server error.
 *     security:
 *       - bearerAuth: []
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user.
 *     description: Update user details.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user to update.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated user data.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               username:
 *                 type: string
 *               image:
 *                 type: string
 *             example:
 *               name: Updated User
 *               username: updateduser
 *               image: https://example.com/images/updateduser.jpg
 *     responses:
 *       200:
 *         description: User updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 username:
 *                   type: string
 *                 image:
 *                   type: string
 *               example:
 *                 id: 3
 *                 name: Updated User
 *                 username: updateduser
 *                 image: https://example.com/images/updateduser.jpg
 *       400:
 *         description: Bad request. Invalid input data.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 *     security:
 *       - bearerAuth: []
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user.
 *     description: Delete a user by ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user to delete.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User deleted successfully.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 *     security:
 *       - bearerAuth: []
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID.
 *     description: Retrieve a user's details by their ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 username:
 *                   type: string
 *                 image:
 *                   type: string
 *               example:
 *                 id: 1
 *                 name: John Doe
 *                 username: johndoe
 *                 image: https://example.com/images/johndoe.jpg
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 *     security:
 *       - bearerAuth: []
*/

router.post('/', userAuthentication, imageUploads, addUserValidators, addUserValidationHandler, createUser)
//router.post('/',imageUploads,addUserValidators,addUserValidationHandler, createUser)
router.get('/', userAuthentication, getUser)
router.get('/:id', userAuthentication, getUserById)
router.put('/:id', userAuthentication, updateUser)
router.delete('/:id', userAuthentication, deleteUser)

module.exports = router