import jwt from 'jsonwebtoken'

const genrateTokenAndSetCookie = (userId, res) => {
    
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true,
        sameSite: "strict",
        // secure: process.env.NODE_ENV === "production" // use secure only in prod
    });

}
export default genrateTokenAndSetCookie;