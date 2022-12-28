
import { DriveLogic } from '../js/drive.logic'
export default function Drives() {
    const { drives } = DriveLogic()

    function b64toBlob(b64Data, contentType) {
        contentType = contentType || '';
        let sliceSize = 512;

        var byteCharacters = btoa(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

    return (
        <div className="mt-4">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
                Recent Drives
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-3 ">
                {drives.map((drive) => (
                    <div
                        key={drive.companyName}
                        className="bg-white overflow-hidden shadow-md border-2 border-gray-200 rounded-lg"
                    >
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-md leading-6 font-medium text-gray-900">
                                Company Name: {drive.companyName}
                            </p>
                            <p className="text-md leading-6 font-medium text-gray-900">
                                Minimum Attendance: {drive.attendance}
                            </p>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                               MIninmum GPA: {drive.gpa}

                            </p>



                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <button
                                    onClick={
                                        // open the pdf in a new tab
                                        () => {
                                            var blob = b64toBlob(drive.noticePdf, "application/pdf");
                                            let a = document.createElement("a");
                                            document.body.appendChild(a);
                                            var url = window.URL.createObjectURL(blob);
                                            a.href = url;
                                            a.download = String("download.pdf");
                                            a.click();
                                            window.URL.revokeObjectURL(url);
                                            a.remove();

                                        }
                                    }
                                    type="button"
                                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Download Notice Pdf
                                </button>
                            </div>

                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <button
                                    onClick={
                                        // open the pdf in a new tab
                                        () => {
                                            var blob = b64toBlob(drive.assessmentPdf, "application/pdf");
                                            let a = document.createElement("a");
                                            document.body.appendChild(a);
                                            var url = window.URL.createObjectURL(blob);
                                            a.href = url;
                                            a.download = String("download.pdf");
                                            a.click();
                                            window.URL.revokeObjectURL(url);
                                            a.remove();

                                        }
                                    }
                                    type="button"
                                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Download Assessment Pdf
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
