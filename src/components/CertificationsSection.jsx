import React from 'react';
import { FaAward } from 'react-icons/fa';

const CertificationsSection = () => {
    const certifications = [
        {
            title: 'The Complete Full-Stack Web Development Bootcamp',
            issuer: 'Udemy',
        },
        {
            title: 'Microsoft Azure AI Fundamentals (AI-900)',
            issuer: 'Microsoft',
        },
        {
            title: 'Web Development Internship Certificate',
            issuer: 'Maniora',
        },
    ];

    return (
        <section
            id="certifications"
            className="py-20 bg-gray-900 text-white px-6 md:px-12"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-cyan-400 flex items-center justify-center gap-2">
                    <FaAward className="text-cyan-300" /> Certifications
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition duration-300 hover:shadow-cyan-500/30 flex flex-col items-center text-center"
                        >
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {cert.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                <span className="text-cyan-400 font-medium">Issuer:</span> {cert.issuer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
