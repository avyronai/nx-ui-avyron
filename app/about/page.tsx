export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Sobre Nós
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-600 mb-6">
            Esta é uma página de exemplo criada para demonstrar como funcionam as rotas no Next.js.
          </p>
          <p className="text-gray-600">
            Esta rota foi criada automaticamente através do arquivo <code className="bg-gray-100 px-2 py-1 rounded">app/about/page.tsx</code>
          </p>
        </div>
      </div>
    </div>
  );
}
