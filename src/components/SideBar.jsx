import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { DurantVectorImage } from '../assets/images';
import { useEffect, useState } from 'react';

const SideBar = () => {

    const [documents] = useAllPrismicDocumentsByType('resume');
    const [contacts] = useAllPrismicDocumentsByType('contact');
    const [resume, setResume] = useState([]);
    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        setResume(fetchResumeArray(documents));
        setContactList(fetchContactArray(contacts));
    }, [documents, contacts]);

    const fetchResumeArray = (documents = []) => {
        return documents.map((document) => {
            return {
                title: document.data.title[0].text,
                list: document.data.list.map((item) => item.text)
            };
        });
    };

    const fetchContactArray = (contacts = []) => {
        return contacts.map((contact) => {
            return {
                contactTitle: contact.data['contact-title'][0].text,
                link: contact.data.link.url
            };
        });
    };

    const renderContactList = () => (
        <div className="div-right">
            {contactList && <p>[CONTACT]</p>}
            {contactList && contactList.map((contact, index) => (
                <a key={index} href={contact.link} target="_blank"><p>{contact.contactTitle}</p></a>
            ))}
        </div>
    );

    const renderResumeList = (title, list) => (
        <div className="div-left">
            {list && <p>[${title}]</p>}
            {list && list.map((item, index) => (
                <p key={index}><span>{item}</span></p>
            ))}
        </div>
    );

    const roleList = resume.find((item) => item.title === 'Role');
    const basedInList = resume.find((item) => item.title === 'Based In');
    const agencyList = resume.find((item) => item.title === 'Agency');
    const softwareList = resume.find((item) => item.title === 'Software');

    return (
        <div className="sidebar-container">
            <img className="duranti-vector" alt="Duranti" src={DurantVectorImage} />
            <div className="sidebar-content">
                <div className="resume-list">
                    {renderResumeList('Role', roleList && roleList.list)}
                    {renderResumeList('Based In', basedInList && basedInList.list)}
                    {renderResumeList('Agency', agencyList && agencyList.list)}
                </div>
                <div className="more-info-list">
                    <div className="div-right">
                        <p>{(softwareList) && `[${softwareList.title}]`}</p>
                        {(softwareList) && softwareList.list.map((software, index) => (
                            <p key={index}>{software}</p>))}
                    </div>
                    {renderContactList(contactList && contactList.contactTitle, contactList && contactList.link)}
                </div>
            </div>
        </div>
    )
}

export default SideBar;