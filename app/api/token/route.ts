import { StreamChat } from 'stream-chat';

export async function POST(request: Request) {
  const serverClient = StreamChat.getInstance(
    'jw6cdmggfgab',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoianc2Y2RtZ2dmZ2FiIn0.C8Ta9u_czT7CsZnv0RY6bMS3MFomLwVr2QxTbY7_e_w'
  );
  const body = await request.json();
  console.log('[/api/token] Body:', body);

  const userId = body?.userId;

  if (!userId) {
    return Response.error();
  }

  const token = serverClient.createToken(userId);

  const response = {
    userId: userId,
    token: token,
  };

  return Response.json(response);
}
