import { useRouter } from 'next/router';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import CustomSelect from '../components/Select';

const Home = () => {
    const router = useRouter();
    const isMobile = useMediaQuery('(max-width:600px)');
    const [selectedType, setSelectedType] = useState(0);
    // const [loginAs, setLoginAs] = useState<String>('');
    const [categories, setCategories] = useState<String>('');
    const [city, setCity] = useState<String>('');
    const [area, setArea] = useState<String>('');
    const [room, setRoom] = useState<String>('');

    let rentalSaleButton = [
        {
            label: 'Rental',
        },
        {
            label: 'Sales',
        },
        {
            label: 'Invest',
        },
    ];
    let loginOptions = [
        {
            value: '2',
            label: 'Individual',
        },
        {
            value: '3',
            label: 'Company',
        },
    ];
    let searchField = [
        {
            label: 'Categories',
            value: categories,
            setValue: setCategories,
            options: loginOptions,
        },
        {
            label: 'City',
            value: city,
            setValue: setCity,
            options: loginOptions,
        },
        {
            label: 'Area',
            value: area,
            setValue: setArea,
            options: loginOptions,
        },
        {
            label: 'Room',
            value: room,
            setValue: setRoom,
            options: loginOptions,
        },
    ];
    return (
        <div>
            <div className="w-screen h-screen ">
                <Image
                    src={`/images/wallpapers/${
                        isMobile ? 'home-mobile.png' : 'home.png'
                    }`}
                    alt="Background Picture "
                    layout="fill"
                    objectFit="fill"
                />
                <Navbar selectedLink={'Home'} clientUser={true} />
                <div className="relative top-14 md:top-16 p-2 h-5/6 flex flex-col justify-center">
                    <div className="text-white md:text-4xl text-xl flex flex-col  ">
                        <p className="flex justify-center font-bold">
                            Find Your Dream Home
                        </p>
                        <p className="mt-4 md:w-3/5 self-center text-white text-sm md:text-lg font-thin text-center">
                            We are recognized for exceeding client expectations
                            and delivering great results through dedication,
                            ease of process, and extraordinary services to our
                            worldwide clients.
                        </p>
                    </div>

                    <div className="mt-4 flex justify-center">
                        {rentalSaleButton.map((d: any, i: number) => (
                            <button
                                className={
                                    selectedType == i
                                        ? 'm-px p-2 bg-bluetransparent text-white rounded shadow '
                                        : 'm-px p-2 bg-whiteTransparent rounded text-white'
                                }
                                onClick={() => setSelectedType(i)}
                            >
                                {d.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 md:flex justify-center">
                        {searchField.map((d) => (
                            <div className="m-1 md:w-48 border">
                                <CustomSelect
                                    transparent={true}
                                    withoutMargin={true}
                                    value={d.value}
                                    onChange={(e: any) =>
                                        d.setValue(e.target.value)
                                    }
                                    label={d.label}
                                    options={d.options}
                                />
                            </div>
                        ))}
                        <button className="md:w-48 w-full h-9 md:m-1 bg-bluetransparent text-white  rounded shadow">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
