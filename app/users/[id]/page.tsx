interface UserPageProps {
  params: {
    id: string;
  };
}

export default function UserPage({ params }: UserPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Perfil do Usuário
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-600 mb-4">
            ID do usuário: <span className="font-bold text-blue-600">{params.id}</span>
          </p>
          <p className="text-gray-600">
            Esta é uma rota dinâmica. Acesse: <code className="bg-gray-100 px-2 py-1 rounded">/users/[qualquer-id]</code>
          </p>
        </div>
      </div>
    </div>
  );
}
