const arquivo_directory = '/src/assets/PosturAI/PosturAI.rar';

export default function DownloadEXE() {
    return (
        <div className="mt-10 flex gap-5">
            <h3>Donwload do Arquivo .exe</h3>
            <a href={arquivo_directory} download="PosturAI.rar" rel="noonpener noreferrer" className="px-7 py-3 text-black bg-[#AFC7FF] hover:bg-white/30 hover:text-white backdrop-blur-lg border border-white/30 rounded-xl transition-all duration-300">
                Clique aqui para baixar o Arquivo
            </a>
        </div>
    );
}