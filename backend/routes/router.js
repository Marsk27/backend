const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/contact/:a', async(req, res) => {
  // const email = req.body.email
  // const website = req.body.website
  const {name,email, subject, message} = req.body
  const action = req.params.a
  
  switch(action) {
    case "send":
      const contactData = {name: name, email: email, subject: subject, message: message}
      const newContact = new schemas.Contact(contactData)
      const saveContact = await newContact.save()
      if (saveContact) {
        res.send('Message sent. Thank you.')
      } else {
        res.send('Failed to send message.')
      }
      break;

      default:
        res.send('Invalid Request')
        break
  }

  res.end()
})

module.exports = router