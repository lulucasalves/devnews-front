import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { fauna } from '../../../services/fauna';
import { query as q } from 'faunadb';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user',
    }),
  ],
  
});
