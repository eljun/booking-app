import { supabase } from '../../lib/supabaseClient';
const nodemailer = require('nodemailer'); // Use CommonJS syntax for Nodemailer

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { room_id, name, email, phone, checkIn, checkOut } = req.body;

    // Insert booking into Supabase
    const { data, error } = await supabase.from('bookings').insert([
      {
        room_id,
        name,
        email,
        phone,
        check_in: checkIn,
        check_out: checkOut,
        status: 'pending',
      },
    ]);

    if (error) {
      console.error('Supabase Error:', error.message);
      return res.status(500).json({ error: error.message });
    }

    // Send Email Notification using Zeptomail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: '"Room Booking App" <info@webtools2go.com>',
      to: email, // Customer's email
      subject: 'Booking Confirmation',
      text: `Dear ${name},\n\nYour booking has been successfully received.\n\nDetails:\n- Check-in: ${checkIn}\n- Check-out: ${checkOut}\n\nThank you for booking with us!`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Booking successful! Confirmation email sent.' });
    } catch (emailError) {
      console.error('Email Error:', emailError.message);
      res.status(500).json({ error: 'Booking saved but email notification failed.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}