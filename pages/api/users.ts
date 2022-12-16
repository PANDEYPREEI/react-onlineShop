import main from "../../db/mongoose";
import kitten from "../../db/schema";

export default function getUsers(req: any,res: any){

    main().catch(error => console.error(error))
    const create = new kitten({name:"John Msit"})
    create.save().then(() => {
        res.status(200).json(create)
    })
}