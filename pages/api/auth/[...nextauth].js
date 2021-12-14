import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";
import User, { UserSchema } from "../../../models/User";
// import Models from '../../../models'

export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // any additional providers
  ],
  adapter: Adapters.TypeORM.Adapter(
    
    // The first argument should be a database connection string or TypeORM config object
    process.env.MONGODB_URI,
    
    // The second argument can be used to pass custom models and schemas
    {
      models: {
        User: { model: User, schema: UserSchema },
        // User: Model.User
      },
    }
  ),
  // other options (pages, callbacks, session, ...etc)
});