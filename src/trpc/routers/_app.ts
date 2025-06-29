import { meetingsRouter } from '@/modules/meetings/server/procedures';
import { createTRPCRouter } from '../init';
import { agentsRouter } from '@/modules/agents/server/procedures';
import { permiumRouter } from '@/modules/premium/server/procedure';
export const appRouter = createTRPCRouter({
    agents: agentsRouter,
    meetings: meetingsRouter,
    premium: permiumRouter,

});
// export type definition of API
export type AppRouter = typeof appRouter;