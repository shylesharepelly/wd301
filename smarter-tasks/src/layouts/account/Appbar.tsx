import {SetStateAction, Fragment, useState, useContext, useEffect } from "react";
import { Disclosure, Menu, Transition, Switch } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/theme";
import { useTranslation } from "react-i18next";

const userNavigation = [
  { name: "Profile", href: "#" },
  { name: "Sign out", href: "/logout" },
];

const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

const Appbar = () => {
  const { pathname } = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);
  const [enabled, setEnabled] = useState(theme === "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    let newTheme = "";
    if (theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "light";
    }
    setEnabled(!enabled);
    setTheme(newTheme);
  };

  const navigation = [
    { name: "Projects", href: "/account/projects", current: false },
    { name: "Members", href: "/account/members", current: false },
  ];
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <>
      <Disclosure as="nav" className="border-b border-slate-200">
        {({ open }) => (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8" src={Logo} alt={t("Smarter Tasks")} />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => {
                      const isCurrent = pathname.includes(item.href);

                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            isCurrent
                              ? "bg-slate-50 text-blue-700"
                              : "text-slate-500 hover:text-blue-600",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={isCurrent ? "page" : undefined}
                        >
                          {t(item.name)}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Switch
                    checked={enabled}
                    onChange={toggleTheme}
                    className={`${enabled ? "bg-slate-400" : "bg-slate-700"}
                      relative inline-flex h-[24px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="sr-only">{t("Use setting")}</span>
                    <span
                      aria-hidden="true"
                      className={`${enabled ? "translate-x-9" : "translate-x-0"}
                        pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-blue-600">
                        <UserCircleIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {t(item.name)}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <Menu>
                <Menu.Button>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                    />
                  </svg>
                </Menu.Button>
                <Menu.Items className="space-y-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700  ${
                          currentLanguage === "en"
                        } ${currentLanguage === "en"}`}
                        onClick={() => changeLanguage("en")}
                      >
                        English
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active ? "bg-gray-100" : ""} ${
                          currentLanguage === "ge"
                        }block px-4 py-2 text-sm text-gray-700`}
                        onClick={() => changeLanguage("ge")}
                      >
                        Deutsch
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        )}
      </Disclosure>
    </>
  );
};

export default Appbar;
