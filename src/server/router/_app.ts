import {router,publicProcedure} from '../trpc';
import prisma from '@/db';
export const appRouter = router({
    getUsers: publicProcedure.query(async(opts) =>{
        // return [10,20,30]; 
        return await prisma.user.findMany();
    })

});

export type AppRouter = typeof appRouter;